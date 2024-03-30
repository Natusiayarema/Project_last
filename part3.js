deleteButton.addEventListener("click", deleteUser);
function deleteUser()
{
  const item = document.getElementById("dropdown");
  item.remove(item.selectedIndex);

}
 