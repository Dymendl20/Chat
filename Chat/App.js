window.onload = function ()
{
    var dymen = new Chat('dymen');
    var milie = new Chat('milie');

    dymen.setFriend(milie);
    milie.setFriend(dymen);

    dymen.connect();
    milie.connect();
};