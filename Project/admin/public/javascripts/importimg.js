function() {
        Dropzone.options.myAwesomeDropzone = {
            maxFiles: 1,
            maxFilesize: 1,
            autoProcessQueue: false,
            addRemoveLinks: true,
            acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
            init: function() {
                var self = this;
                // config
                self.options.addRemoveLinks = true;
                self.options.dictRemoveFile = "Delete";
                // On removing file
                self.on("removedfile", function(file) {
                    console.log(file);
                });
                //Over MaxFile
                this.on("maxfilesexceeded", function(file) {
                    alert("No more files please!");
                });
                //Upload button
                var submitButton = document.querySelector("#submit-all")
                drop = this;
                submitButton.addEventListener("click", function() {
                    drop.processQueue();
                });
                this.on("queuecomplete", function(file) {
                    alert("All files have uploaded ");
                });
            }
        }
    }
