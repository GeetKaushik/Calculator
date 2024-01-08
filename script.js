            console.log("Hello")
            function Add() {
                var x = document.getElementById("num1").value;
                var y = document.getElementById("num2").value;
                var z = Number(x) + Number(y);
                document.getElementById("result").innerHTML = '<h1>' + String(z) + '</h1>';
                document.getElementById("result").className = "alert alert-success mt-4 text-success";
            }
            function Sub() {
                var x = document.getElementById("num1").value;
                var y = document.getElementById("num2").value;
                var z = Number(x) - Number(y);
                document.getElementById("result").innerHTML = '<h1>' + String(z) + '</h1>';
                document.getElementById("result").className = "alert alert-success mt-4 text-success";
            }
            function Div() {
                var x = document.getElementById("num1").value;
                var y = document.getElementById("num2").value;
                var z = Number(x) * Number(y);
                document.getElementById("result").innerHTML = '<h1>' + String(z) + '</h1>';
                document.getElementById("result").className = "alert alert-success mt-4 text-success";
            }
            function Mult() {
                var x = document.getElementById("num1").value;
                var y = document.getElementById("num2").value;
                var z = Number(x) / Number(y);
                document.getElementById("result").innerHTML = '<h1>' + String(z) + '</h1>';
                document.getElementById("result").className = "alert alert-success mt-4 text-success";
            }

