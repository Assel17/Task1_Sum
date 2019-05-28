function myFunction(){
            let x, y, res, t, u;
		    x = document.getElementById('myFirstNumber').value;
            x = parseFloat(x);
            y = document.getElementById('mySecondNumber').value;
            y = parseFloat(y);
            res = x + y;
			document.getElementById('demo').innerHTML = res;
			
			
		}