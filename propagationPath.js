Event.prototype.composedPath = Event.prototype.composedPath || function() {
    var target = this.target || null;
    
    if (!target || !target.parentElement) {
        return [];
    }
    
    var path = [target];
    
    while (target.parentElement) {
        target = target.parentElement;
        path.push(target);
    }
    
    path.push(document, window);
    
    return path;
};

