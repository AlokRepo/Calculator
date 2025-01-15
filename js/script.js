let currentOperation = null;
        let firstValue = '';
        let secondValue = '';

        function appendValue(value) {
            const screen = document.getElementById('screen');
            if (currentOperation) {
                secondValue += value;
                screen.textContent = secondValue;
            } else {
                firstValue += value;
                screen.textContent = firstValue;
            }
        }

        function setOperation(operation) {
            if (firstValue === '') return;
            currentOperation = operation;
        }

        function calculate() {
            if (firstValue === '' || secondValue === '' || !currentOperation) return;
            const result = eval(`${firstValue} ${currentOperation} ${secondValue}`);
            document.getElementById('screen').textContent = result;
            firstValue = result;
            secondValue = '';
            currentOperation = null;
        }

        function clearScreen() {
            firstValue = '';
            secondValue = '';
            currentOperation = null;
            document.getElementById('screen').textContent = '0';
        }

        function changeTheme(primary, secondary, background) {
            document.documentElement.style.setProperty('--primary-color', primary);
            document.documentElement.style.setProperty('--secondary-color', secondary);
            document.documentElement.style.setProperty('--background-color', background);
        }