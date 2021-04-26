import mock from "../mock"

export const searchResult = [
  {
    groupTitle: "Pages",
    searchLimit: 4,
    data: [
      {
        id: 1,
        target: "home",
        title: "Home",
        link: "/",
        icon: "Home"
      }
    ]
  }
]

mock.onGet("/api/main-search/data").reply(200, {
  searchResult
})
