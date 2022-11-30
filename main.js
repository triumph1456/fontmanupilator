function modelLoaded() {
    console.log('poseNet is Initialized!');
}


function draw() {
    background('#969A97');
    fill('#f90093');
    stroke('#f90093');
    square(noseX, noseY, 100);
}

noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload() {    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" nosey = " + noseY);


        leftWristX = results.pose.leftWristX.x;
        rightWristX = results.pose.rightWristX.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristx = " + leftWristX + " rightwristX = "+ rightWristX + " difference = " + difference);
    }
}