// Enemies our player must avoid
var Enemy = function() {
	this.step = 101;
    this.jump = 83;
	this.startX = this.step*1;
	this.startY = this.jump*2;
	this.sprite = 'images/enemy-bug.png';
	this.x = this.startX;
	this.y = this.startY;
	// The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

	if (this.x < (this.step*6)){
		this.x += 300 * dt;
	}
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class DONE
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
    constructor() {
        
        this.step = 101;
        this.jump = 83;
        this.sprite = 'images/char-boy.png';
        this.startX = this.step * 0;
        this.startY = this.jump * 5;
        this.x = this.startX;
        this.y = this.startY;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    //update position

    //handle input

  



    handleInput(input) {
        switch(input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.step;    
                }
                break;
            case 'right':
                if (this.x < (this.step * 4)) {
                 this.x += this.step;
                }
                break;
            case 'up':
                if (this.y > 0){
                this.y -= this.jump;                    
                }
                break;
            case 'down':
                if (this.y < (this.jump*5)) {
                    this.y += this.jump;
                }                
                break;
        }
    }
};

const player = new Hero();

const Bug1 = new Enemy();

let allEnemies = []
allEnemies.push(Bug1);



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
