(function(W, Hooray) {
    "use strict";

    var Billiard = Hooray.Namespace('Billiard', 'Billiard');
    Billiard.Ball = Hooray.Class({
        init: function(id, x, y, radius) {
            Hooray.log('A new Billiard.Ball instance has been created with id "'+id+'"!');
            this.id     = id;
            this.x      = x;
            this.y      = y;
            this.radius = radius;

            // A Billiard.Ball object will be augmented with a mesh property during initialization!
        }
    });
})(window, Hooray);