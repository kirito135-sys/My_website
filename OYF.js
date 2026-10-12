
        /* ===== Задание 1: сравнение двух чисел ===== */
        function zadanie1() {
            var x = parseInt(prompt("Введите значение x", ""));
            var y = parseInt(prompt("Введите значение y", ""));
            if (x < y) {
                alert("Максимальное число - y");
            } else if (x > y) {
                alert("Максимальное число - x");
            } else {
                alert("Введенные числа равны!");
            }
        }

        /* ===== Задание 1 (доп.): проверка пароля ===== */
        function zadanie1_password() {
            var password = "12345";
            var input = prompt("Введите пароль:", "");
            if (input === password) {
                alert("Пароль верен!");
            } else {
                alert("Неправильно введенный пароль!");
            }
        }

        /* ===== Задание 2: линии ===== */
        function zadanie2() {
            var result = "";
            for (var i = 1; i <= 10; i++) {
                result += "<hr style='width:" + (i * 10) + "px;'>";
            }
            document.getElementById("lines").innerHTML = result;
        }

        /* ===== Задание 3: таблица степеней двойки ===== */
        function zadanie3() {
            var html = "<table border='1'><tr><th>Степень</th><th>Результат</th></tr>";
            for (var i = 0; i <= 5; i++) {
                html += "<tr><td>2^" + i + "</td><td>" + Math.pow(2, i) + "</td></tr>";
            }
            html += "</table>";
            document.getElementById("powers").innerHTML = html;
        }

        /* ===== Задание 4: школьные предметы ===== */
        function zadanie4() {
            var subjects = ["Математика", "Физика", "Информатика", "История", "Литература", "Русский язык", "Английский язык", "Химия", "Биология", "География"];
            var exact = subjects.slice(0, 3);
            var human = subjects.slice(3, 10);
            document.getElementById("subjects").innerHTML =
                "<p><b>Точные науки:</b> " + exact.join(", ") + "</p>" +
                "<p><b>Гуманитарные науки:</b> " + human.join(", ") + "</p>";
        }

        /* ===== Задание 5: определение браузера ===== */
        function zadanie5() {
            if (navigator.appName === "Microsoft Internet Explorer") {
                window.location.href = "index.html";
            } else {
                window.location.href = "index.html";
            }
        }

