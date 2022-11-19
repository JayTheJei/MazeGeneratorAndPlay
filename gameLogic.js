function doGameLogic() {
    var moveInd;
    window.addEventListener('keydown', doKeyDown, true);

    function doKeyDown(evt) {
        var handled = false;
        switch (evt.keyCode) {
            case 38:  /* Up arrow was pressed */
                startCell.unhighlight(0);
                startCell.show();
                startCell = startCell.moveup();
                startCell.highlight(0);
                handled = true;
                break;
            case 87:  /* Up arrow was pressed */
                startCell.unhighlight(0);
                startCell.show();
                startCell = startCell.moveup();
                startCell.highlight(0);
                handled = true;
                break;
            case 40:  /* Down arrow was pressed */
                startCell.unhighlight(0);
                startCell.show();
                startCell = startCell.movedown();
                startCell.highlight(0);
                handled = true;
                break;
            case 83:  /* Down arrow was pressed */
                startCell.unhighlight(0);
                startCell.show();
                startCell = startCell.movedown();
                startCell.highlight(0);
                handled = true;
                break;
            case 37:  /* Left arrow was pressed */
                startCell.unhighlight(0);
                startCell.show();
                startCell = startCell.moveleft();
                startCell.highlight(0);
                handled = true;
                break;
            case 65:  /* Left arrow was pressed */
                startCell.unhighlight(0);
                startCell.show();
                startCell = startCell.moveleft();
                startCell.highlight(0);
                handled = true;
                break;
            case 39:  /* Right arrow was pressed */
                startCell.unhighlight(0);
                startCell.show();
                startCell = startCell.moveright();
                startCell.highlight(0);
                handled = true;
                break;
            case 68:  /* Right arrow was pressed */
                startCell.unhighlight(0);
                startCell.show();
                startCell = startCell.moveright();
                startCell.highlight(0);
                handled = true;
                break;
        }
        console.log(moves);
        if (handled)
            evt.preventDefault(); // prevent arrow keys from scrolling the page (supported in IE9+ and all other browsers)
        
        if(startCell.ind == endCell.ind){
            alert("Congratulations! Game Passed! Moves used : " + moves);
        }
    }
}
