module.exports = {
  bitter: [
    '<div class="col-sm-12">',
      '<div class="infoContainer>',
        '<img src="<%=img%>">',
        '<span><%=date%></span>',
      '</div>',
      '<p class="content">',
        '<%=content%>',
      '</p>',
      '<section>',
        '<i class="fa fa-pencil-square-o"></i>',
        '<i class="fa fa-trash-o"></i>',
      '</section>',
      '<form class="editForm">',
      '</form>',
    '</div>'
  ].join(''),
  addForm: [
    '<div class="addButton">',
      '<i class="fa fa-plus-circle"></i>',
    '</div>',
    '<form class="addForm hide">',
      '<input type="text" name="img" placeholder="Image URL">',
      '<textarea type="text" name="content" placeholder="Bitter Rant"></textarea>',
      '<button name="submitAdd">Submit</button>',
    '</form>'
  ].join(''),
  editForm: [
    '<input type="text" name="img" value="<%=img%>">',
    '<textarea type="text" name="content"><%=content%></textarea>',
    '<button name="submitEdit">Submit</button>',
  ].join('')
}
