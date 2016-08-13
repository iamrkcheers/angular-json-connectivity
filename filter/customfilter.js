app.filter("filter",function()
           {
    return function(x)
    {
        var string="";
        var c="";
        
        for(var i=0;i< x.length;i++)
        {
            c=x[i];
            if(i%2==0)
            {
                c=c.toUpperCase();
            }
            string+=c;
        }
        return string;
    };
});