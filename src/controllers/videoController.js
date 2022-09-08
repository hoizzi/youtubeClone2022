export const trending = (req, res) => {
    const videos = [
        {
            title: "First",
            rating: 5,
            comments:2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
        {
            title: "Second",
            rating: 5,
            comments:2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 2,
        },
        {
            title: "Third",
            rating: 5,
            comments:2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 3,
        },
    ];
    
    res.render("home", {pageTitle: "Home", videos});
}
export const see = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const edit = (req, res) => res.render("edit", {pageTitle: "Edit"});
export const remove = (req, res) => res.send("Remove");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");