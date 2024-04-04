function pagination (page, total, limit) {
    var pageSize = Math.ceil(total/limit);
    
    var _pagination = {
        page: page,
        total: total,
        limit: limit,
        pages: pageSize
      };
  
    if(page > 1){
      var prev = page-1;
      _pagination.previous = prev;
    }
  
    var remaining = total - (page * limit);
  
    if(remaining > 0){
      _pagination.next = page+1;
    }
  
    return _pagination;
  }
  
  var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  var pageQuery = 1;
  var page = parseInt(pageQuery) || 1;
  var limit = 5;
  var offset = (page - 1) * limit;
  var total = array.length;
  var items = array.slice(offset, offset+limit);
  
  console.log(items);
  console.log(pagination(page, total, limit));