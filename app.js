document.addEventListener('DOMContentLoaded', function(){

    let button = document.createElement('button');
    button.className = 'button';
    let buttonTextNode = document.createTextNode('Add Square');
    button.appendChild(buttonTextNode);
    document.body.appendChild(button);

    let squareContainer = document.createElement('div');
    squareContainer.id = 'square-container';
    document.body.appendChild(squareContainer);

    let num = 0;

    let myArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]; 

    function getRandomColor(){
        return myArray[Math.floor(Math.random() * myArray.length)];
    }
    

    button.addEventListener('click', function(){
        num++;
        let newSquare = document.createElement('div');
        newSquare.id = num;
        let newSquareId = Number(newSquare.id);
        newSquare.className = 'square';
        squareContainer.appendChild(newSquare);
      

        newSquare.addEventListener('mouseover', function(){
            newSquare.textContent = newSquare.id; 
        })

        newSquare.addEventListener('mouseout', function(){
            newSquare.textContent = ''; 
        })

        newSquare.addEventListener('click', function(){
            newSquare.style = 'background-color:' + getRandomColor();
        
        })

        newSquare.addEventListener('dblclick',function(){
            removeSquare();
        });

       function removeSquare(newSquare) {
            // Convert the selected square's id to a number
            
            // Get all squares
            let squares = document.getElementsByClassName('square');
            
            // Find the selected square among all squares
            for (let i = 0; i < squares.length; i++) {
                // Convert current square's id to a number for comparison
                let currentId = Number(squares[i].id);
                
                // Check if the current square is the selected square
                if (currentId === (newSquareId)) {
                    // Check if there is a square after the selected square
                    if (i + 1 < squares.length) {
                        // Remove the square after the selected square
                        squares[i + 1].remove();
                    } else {
                        // Alert if there is no square after the selected square
                        alert("There is no square after the selected square.");
                    }
                    break; // Exit the loop once the operation is complete
                }
        }
    }

    });
     
});
