
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: "Today's Todo", content: 'testing my api and front-end mounting'},
        {title: "Today's Todo", content: 'testing my api and front-end mounting'},
        {title: "Today's Todo", content: 'testing my api and front-end mounting'},
      ]);
    });
};
