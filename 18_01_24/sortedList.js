function createSortedList() {
    let sortList = [];

    let result = {
        add: function (el) {
            if (typeof el !== Number || isNaN(el)) {
                return;
            }
            this._sortList.push(Number(el));
            this._sort(this._sortList);
            this.size = this._sortList.length;
        },
        remove: function (index) { },
        get: function (index) { },
        size: 0,
        _sort: function (a, b) { return a - b },
        _sortList : []
    }

}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));