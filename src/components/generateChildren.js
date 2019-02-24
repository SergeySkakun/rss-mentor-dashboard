function generateChildren(count, child) {
    let children = [];
    
        for (let i = 0; i < count; i++){
            children.push(child);
        }
    return children;
  };

export default generateChildren;
