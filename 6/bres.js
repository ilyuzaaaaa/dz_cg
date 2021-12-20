function Line(ctx, x_0, y_0, x_1, y_1) {
    var dmax = Math.max(Math.abs(x_1-x_0), Math.abs(y_1-y_0));
    var dmin = Math.min(Math.abs(x_1-x_0), Math.abs(y_1-y_0));
    var xdir = 1;
    if (x_1<x_0) xdir = -1;
    var ydir = 1;
    if (y_1<y_0) ydir = -1;
    var eps = 0;
    var s = 1;
    var k=2*dmin;
    if (Math.abs(y_1-y_0)<=dx) {
        var y = y_0;
        for (var x=x_0; x*xdir<=x_1*xdir; x+=xdir) {
            ctx.fillRect(x*s, y*s, 1*s, 1*s);
            eps = eps+k;
            if (eps>dmax) {
                y+=ydir;
                eps = eps - 2*dmax;
            }	
        } 
    } else {
        var x = x_0;
        for (var y=y_0; y*ydir<=y_1*ydir; y+=ydir) {
            ctx.fillRect(x*s, y*s, 1*s, 1*s);
            eps = eps+k;
            if (eps>dmax) {
                x+=xdir;
                eps = eps - 2*dmax;
            }	
        } 
    }		
}
