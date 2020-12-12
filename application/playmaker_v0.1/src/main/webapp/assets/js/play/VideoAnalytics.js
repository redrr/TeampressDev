var isplaying = false;
var isEdit = false;
var videoId;
var pos = [];
var mode;
$(document).ready(function () {
    $().ready(function () {
        //Setup
        createDataTable($('#table'));
        const video = $('#video')[0];
        console.log($('#video').width()+", "+$('#video').height());
        drawer($('#video').width(), $('#video').height());
        $('#container').hide();
        //Control
        $(window).keypress(function (e) {
            if (e.key === ' ' || e.key === 'Spacebar') {
                // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
                e.preventDefault();
                if(!isplaying){
                    isplaying = true;
                    video.play();
                } else {
                    isplaying = false;
                    video.pause();
                }
            }
        });
        $('#edit').on('click', function () {
            if(!isEdit){
                video.pause();
                $('#container').show();
                isEdit = true;
            } else {
                video.play();
                $('#container').hide();
                isEdit = false;
            }
        });
        $('#clear').on('click', function () {
            drawer();
        });
        $('#mode').on("change", function() {
            pos = [];
            mode = $('#mode').val();
        });
    });
});

/*
function drawer() {
    var width = 960;
    var height = 500;

    // first we need Konva core things: stage and layer
    var stage = new Konva.Stage({
        container: 'container',
        width: 960,
        height: 500
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    // then we are going to draw into special canvas element
    var canvas = document.createElement('canvas');
    canvas.width = 960;
    canvas.height = 500;

    // created canvas we can add to layer as "Konva.Image" element
    var image = new Konva.Image({
        image: canvas,
        x: 0,
        y: 0
    });
    layer.add(image);
    stage.draw();

    $('#clear').on('click', function () {
        drawer();
    });

    // Good. Now we need to get access to context element
    var context = canvas.getContext('2d');
    context.strokeStyle = $('#color').val();
    context.lineJoin = 'round';
    context.lineWidth = $('#width').val();

    var isPaint = false;
    var lastPointerPosition;
    var mode = 'brush';

    layer.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
    });

    layer.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
    });

    // now we need to bind some events
    // we need to start drawing on mousedown
    // and stop drawing on mouseup
    image.on('mousedown touchstart', function() {
        isPaint = true;
        lastPointerPosition = stage.getPointerPosition();
    });

    // will it be better to listen move/end events on the window?

    stage.on('mouseup touchend', function() {
        isPaint = false;
    });

    // and core function - drawing
    stage.on('mousemove touchmove', function() {
        if (!isPaint) {
            return;
        }

        if (mode === 'brush') {
            context.globalCompositeOperation = 'source-over';
        }
        if (mode === 'eraser') {
            context.globalCompositeOperation = 'destination-out';
        }
        context.beginPath();

        var localPos = {
            x: lastPointerPosition.x - image.x(),
            y: lastPointerPosition.y - image.y()
        };
        context.moveTo(localPos.x, localPos.y);
        var pos = stage.getPointerPosition();
        localPos = {
            x: pos.x - image.x(),
            y: pos.y - image.y()
        };
        context.strokeStyle = $('#color').val();
        context.lineWidth = $('#width').val();
        context.lineTo(localPos.x, localPos.y);
        context.closePath();
        context.stroke();
        lastPointerPosition = pos;
        layer.batchDraw();
    });
}
*/

//Create Analyzer
function drawer(width, height) {
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    // add canvas element
    var layer = new Konva.Layer();
    stage.add(layer);
    layer.draw();

    // add cursor styling
    stage.on('click', function() {
        //log
        console.log(stage.getPointerPosition());
        //main
        pos.push(stage.getPointerPosition().x);
        pos.push(stage.getPointerPosition().y);
        if(mode === 'line') {
            var line = new Konva.Line({
                points: pos,
                stroke: $('#color').val(),
                strokeWidth: 4,
                lineCap: 'round',
                lineJoin: 'round',
            });
            layer.add(line);
        }
        if(mode === 'arrow') {
            var arrow = new Konva.Arrow({
                points: pos,
                stroke: $('#color').val(),
                strokeWidth: 4,
                lineCap: 'round',
                lineJoin: 'round',
            });
            layer.add(arrow);
        }
        if(mode === 'select') {
            if(pos.length === 2) {
                var select = new Konva.RegularPolygon({
                    x: pos[0],
                    y: pos[1],
                    sides: 3,
                    radius: 8,
                    fill: $('#color').val(),
                    stroke: $('#color').val(),
                    strokeWidth: 4,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                layer.add(select);
                pos = [];
            }
        }
        layer.draw();
    });

}

//Load video
function setupVideo(id,url) {
    videoId = id;
    $('#analyzer').show();
    $('#source').attr('src', '/content/videoAnalytics/upload/'+url);
    $('#video')[0].load();
}