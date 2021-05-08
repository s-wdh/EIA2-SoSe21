namespace L08_1_GenerativeArt {
    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        console.log("start");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground(canvas);
        positions(canvas);
    }

    function drawBackground(_canvas: HTMLCanvasElement): void {
        console.log("background");

        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 40;

        pattern.fillStyle = "#d35645";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);

        //lil help     x   y
        pattern.moveTo(0, 6);
        pattern.lineTo(40, 2);
        pattern.moveTo(0, 12);
        pattern.lineTo(40, 8);
        pattern.moveTo(0, 18);
        pattern.lineTo(40, 14);
        pattern.moveTo(0, 24);
        pattern.lineTo(40, 20);
        pattern.moveTo(0, 30);
        pattern.lineTo(40, 26);
        pattern.moveTo(0, 36);
        pattern.lineTo(40, 32);
        pattern.moveTo(0, 42);
        pattern.lineTo(40, 38);
        pattern.strokeStyle = "#d13724";
        pattern.stroke();
        pattern.closePath();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, _canvas.width, _canvas.height);
    }

    function positions(_canvas: HTMLCanvasElement): void {
        console.log("positions");

        // Wavy Line
        for (let i: number = 0; i < 3; i++) {
            let x: number;
            let y: number;
            x = 0;
            y = (Math.random() * _canvas.height);
            createWavyLine(x, y);
        }

        // Ellipses
        for (let i: number = 0; i < 300; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * _canvas.width);
            y = (Math.random() * _canvas.height);
            createConfetti(x, y, i);
        }

        // V's
        for (let i: number = 0; i < 60; i++) {
            let x: number;
            let y: number;
            x = (_canvas.width / 2) + (Math.random() * (_canvas.width / 2));
            y = (Math.random() * _canvas.height);
            createVShapes(x, y);
        }

        // Smileys
        for (let i: number = 0; i < 200; i++) {
            let x: number;
            let y: number;
            if (i < 100) {
                x = (Math.random() * _canvas.width);
                y = (Math.random() * (_canvas.height / 2));
            } else {
                x = (Math.random() * _canvas.width);
                y = (Math.random() * _canvas.height);
            }
            createSmileys(x, y);
        }

        // Curves
        for (let i: number = 0; i < 10; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * _canvas.width);
            y = (Math.random() * _canvas.height);
            createCurves(x, y);
        }

        // big Circles
        for (let i: number = 0; i < 100; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * _canvas.width);
            y = (Math.random() * _canvas.height);
            createCircles(x, y, i);
        }

        // Polygons
        for (let i: number = 0; i < 60; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * _canvas.width);
            y = (Math.random() * _canvas.height);
            createPolygons(x, y);
        }

        // Empty Spaces on Canvas
        let quantity: number = 1 + Math.floor(Math.random() * 3);
        console.log(quantity);
        for (let i: number = 0; i < quantity; i++) {
            let x: number;
            let y: number;
            x = (Math.random() * _canvas.width);
            y = (Math.random() * _canvas.height);
            createEmptySpaces(x, y);
        }
    }

    function createWavyLine(_x: number, _y: number): void {
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(20, 20, 80, 20, 100, 0);
        crc2.bezierCurveTo(120, -20, 180, -20, 200, 0);
        crc2.bezierCurveTo(220, 20, 280, 20, 300, 0);
        crc2.bezierCurveTo(320, -20, 380, -20, 400, 0);
        crc2.bezierCurveTo(420, 20, 480, 20, 500, 0);
        crc2.bezierCurveTo(520, -20, 580, -20, 600, 0);
        crc2.bezierCurveTo(620, 20, 680, 20, 700, 0);
        crc2.bezierCurveTo(720, -20, 780, -20, 800, 0);
        crc2.bezierCurveTo(820, 20, 880, 20, 900, 0);
        crc2.bezierCurveTo(920, -20, 980, -20, 1000, 0);
        crc2.bezierCurveTo(1020, 20, 1080, 20, 1100, 0);
        crc2.bezierCurveTo(1120, -20, 1180, -20, 1200, 0);
        crc2.bezierCurveTo(1220, 20, 1280, 20, 1300, 0);
        crc2.bezierCurveTo(1320, -20, 1380, -20, 1400, 0);
        crc2.bezierCurveTo(1420, 20, 1480, 20, 1500, 0);
        crc2.bezierCurveTo(1520, -20, 1580, -20, 1600, 0);
        crc2.strokeStyle = "#92299e";
        crc2.lineWidth = 15;
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }

    function createConfetti(_x: number, _y: number, _i: number): void {
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);

        if (_i < 150) {
            crc2.beginPath();
            crc2.rotate(Math.random());
            crc2.ellipse(0, 0, 12, 7, 0, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffe629";
            crc2.strokeStyle = "#ffe205";
            crc2.fill();
            crc2.closePath();
        } else if (_i > 149) {
            crc2.beginPath();
            crc2.rotate(Math.random());
            crc2.arc(0, 0, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffe629";
            crc2.strokeStyle = "#ffe205";
            crc2.fill();
            crc2.closePath();
        } else {
            console.log("mistake");
        }
        crc2.restore();
    }

    function createVShapes(_x: number, _y: number): void {
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);

        crc2.beginPath();
        crc2.rotate(Math.random());
        crc2.moveTo(20, 0);
        crc2.lineTo(0, 15);
        crc2.lineTo(20, 30);
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 10;
        crc2.stroke();
        crc2.closePath();

        crc2.restore();
    }

    function createSmileys(_x: number, _y: number): void {
        crc2.restore();
        crc2.save();
        crc2.font = "20px monospace";
        crc2.fillStyle = "#71ccef";
        crc2.fillText(":)", _x, _y);
        crc2.restore();
    }

    function createCurves(_x: number, _y: number): void {
        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        crc2.beginPath();
        crc2.moveTo(20, 10);
        crc2.quadraticCurveTo(30, 40, 100, 10);
        crc2.quadraticCurveTo(110, 100, 190, 10);
        crc2.quadraticCurveTo(200, 40, 220, 10);
        crc2.strokeStyle = "#44f014";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }

    function createCircles(_x: number, _y: number, _i: number): void {  
        // create scale factor
        let scaleFactor: number = Math.floor(Math.random() * 5);
        
        // create gradients
        let linearGradient: CanvasGradient = crc2.createLinearGradient((- 10 * scaleFactor), (- 10 * scaleFactor), (10 * scaleFactor), (10 * scaleFactor));
        linearGradient.addColorStop(0.1, "#00ff11");
        linearGradient.addColorStop(0.8, "#ff6e00");
        let radialGradient: CanvasGradient = crc2.createRadialGradient(0, 0, 2, 0, 0, (10 * scaleFactor));
        radialGradient.addColorStop(0, "#ff0040");
        radialGradient.addColorStop(0.9, "#00d0ff");

        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        crc2.scale(scaleFactor, scaleFactor);
        crc2.beginPath();
        crc2.arc(0, 0, 10, 0, 2 * Math.PI);
        if (_i < 50) {
            crc2.fillStyle = linearGradient;
        } else if (_i > 49) {
            crc2.fillStyle = radialGradient;
        }
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }

    function createPolygons(_x: number, _y: number): void {
        // create random Color :)
        let colorRedValue: number = Math.floor(Math.random() * 256);
        let redString: string = colorRedValue.toString();
        let colorGreenValue: number = Math.floor(Math.random() * 256);
        let greenString: string = colorGreenValue.toString();
        let colorBlueValue: number = Math.floor(Math.random() * 256);
        let blueString: string = colorBlueValue.toString();
        let rgbCode: string = "rgba(" + redString + ", " + greenString + ", " + blueString + ", 1)";

        crc2.restore();
        crc2.save();
        crc2.translate(_x, _y);
        crc2.scale((Math.floor(Math.random() * 5)), (Math.floor(Math.random() * 5)));
        crc2.beginPath();
        crc2.moveTo(20, 0);
        crc2.lineTo(0, 20);
        crc2.lineTo(30, 30);
        crc2.lineTo(10, 20);
        crc2.lineTo(20, 10);
        crc2.lineTo(20, 0);
        crc2.fillStyle = rgbCode;
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    
    function createEmptySpaces(_x: number, _y: number): void {
        crc2.restore();
        crc2.save();
        crc2.clearRect(_x, _y, 50, 50);
        crc2.restore();
    }
} // namespace