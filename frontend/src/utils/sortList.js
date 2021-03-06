const sortList = (list, order) => {
    if (order === 'asc') {
        return list.sort((a, b) => {
            const la = a.lastName.toLowerCase();
            const lb = b.lastName.toLowerCase();
            if (la < lb) {
                return -1;
            }
            if (la > lb) {
                return 1;
            }
            return 0;
        });
    }

    if (order === 'desc') {
        return list.sort((a, b) => {
            const la = a.lastName.toLowerCase();
            const lb = b.lastName.toLowerCase();
            if (la > lb) {
                return -1;
            }
            if (la < lb) {
                return 1;
            }
            return 0;
        });
    }

    if (order === 'newest') {
        return list.sort((a, b) => {
            let da = new Date(a.createdAt),
                db = new Date(b.createdAt);
            return db - da;
        });
    }

    if (order === 'oldest') {
        return list.sort((a, b) => {
            let da = new Date(a.createdAt),
                db = new Date(b.createdAt);
            return da - db;
        });
    }
};

export default sortList;
