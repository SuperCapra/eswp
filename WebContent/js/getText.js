function back() {
            let target = document.getElementById('targetparagraph');

        	/*try {
                switch (this.readyState) {
                case XMLHttpRequest.OPENED:
                    target.value += "[Server connection established]\n";
                    return;
                case XMLHttpRequest.HEADERS_RECEIVED:
                    target.value += "[Request received]\n";
                    return;
                case XMLHttpRequest.LOADING:
                    target.value += "[Processing request]\n";
                    return;
                case XMLHttpRequest.DONE:
                    target.value += "[Response is ready]\n";
                    break;
                default:
                    // UNSENT
                    target.value += "[Request not initialized or error " + this.readyState + "]\n";
                    return;
                }
            } catch (e) { //il try{} catch {} è stato messo per completezza
                target.value += "[Exception: " + e + "]\n";
	            return;
            }

            if (this.status != 200) { //200 significa che è andato tutto bene, il 404 ad esempio è "pagina non trovata"
                target.value += "[Something went wrong: " + this.status + "]\n";
                return;
            }*/

            target.value += this.responseText;
        }

        function getTextDetailed() {
            let request = new XMLHttpRequest();
            request.onreadystatechange = back;
            request.open("GET", "/eswp/s45.txt");
            request.send();
        }

        function getText() {
            let request = new XMLHttpRequest();
            request.onload = back;
            request.open("GET", "/eswp/s45.txt");
            request.send();
        }