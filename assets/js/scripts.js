
var Data=1;
var DataList=[];
var tableEl = document.querySelector('#myTable'),rIndex;

const tbodyEl = document.querySelector('tbody');
function addNewItem(){
    var name1 = document.getElementById('txtName').value;
    var age1 = document.getElementById('txtAge').value;
    var gender1 = document.getElementById('txtGender').value;
    // Validation checks
    if (!name1 || !age1 || !gender1) {
        alert("Please fill all fields.");
        return;
    }
    
    if (!/^\d+$/.test(age1) || age1 < 1 || age1 > 120) {
        alert("Please enter a valid age between 1 and 120.");
        return;
    }
    addItemsToTable(name1,age1,gender1);
    document.getElementById('txtName').value = "";
    document.getElementById('txtAge').value = "";
    document.getElementById('txtGender').value = "";
    
}
function addItemsToTable(name,age,gender){
    var iCount=Data++;
    tbodyEl.innerHTML+='<tr><td>'+iCount+'</td><td>'+name+'</td><td>'+age+'</td><td>'+gender+'</td><td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="updateItem(this)">Update</button></td><td><button class="btn btn-danger"  onclick="DeleteItem(this)">Delete</button></td></tr>';
}
function DeleteItem(e)
{
    var st=e.parentNode.parentNode;
    st.parentNode.removeChild(st);
}

var ModName=document.getElementById("NameMod");
var ModAge=document.getElementById("AgeMod");
var ModGender=document.getElementById("GenderMod");

function updateItem(index){
    debugger;
    var st=index.parentNode.parentNode;
    rIndex=st.rowIndex;
    ModName.value=st.cells[1].innerHTML;
    ModAge.value=st.cells[2].innerHTML;
    ModGender.value=st.cells[3].innerHTML;
}
function updData()
{   
    debugger
    tableEl.rows[rIndex].cells[1].innerHTML=ModName.value;
    tableEl.rows[rIndex].cells[2].innerHTML=ModAge.value;
    tableEl.rows[rIndex].cells[3].innerHTML=ModGender.value;
    var modalElement = document.getElementById('exampleModal');
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();

}

