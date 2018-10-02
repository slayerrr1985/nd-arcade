// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = 63;
    this.speed = 100;
    this.width = 50;
    this.height = 50;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x > 500){
        this.x = 0;
    } else{
        this.x = this.x + this.speed * dt;
    }
    //checkCollisions();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

function checkCollisions(thisEnemy){

    if (player.x < thisEnemy.x + thisEnemy.width &&
        player.x + player.width > thisEnemy.x &&
        player.y < thisEnemy.y + thisEnemy.height &&
        player.y + player.height > thisEnemy.y) {
        console.log("Collision detected!");
        player.deaths++;
        player.reset();
        console.log("Deaths: " + player.deaths);
    }

};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // Variables applied to each of our instances go here,
    
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-horn-girl.png';
    this.x = 202;
    this.y = 383;
    this.score = 0;
    this.deaths = 0;
    this.width = 50;
    this.height = 50;
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers
    if (this.y < 0){
        console.log("Water!");
        this.score++;
        console.log("Score: " + this.score);
        this.reset();
    }
};

Player.prototype.reset = function(){
    this.x = 202;
    this.y = 383;
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPressed) {
    switch (keyPressed){
        case "left":
            if (this.x > 0)
                this.x = this.x - 101;
            break;
        case "right":
            if (this.x < 404)
                this.x = this.x + 101;
            break;
        case "up":
            if (this.y > 0)
                this.y = this.y - 83;
            break;
        case "down":
            if (this.y < 303)
                this.y = this.y + 83;
            break;  
    };
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();

var enemy1 = new Enemy();
var enemy2 = new Enemy();
enemy2.x = -200;
enemy2.y = 166;
var allEnemies = [enemy1,enemy2];





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
