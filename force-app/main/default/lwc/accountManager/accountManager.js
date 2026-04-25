import { LightningElement, track } from 'lwc';

export default class AccountManager extends LightningElement {
    @track listAccount = [
        { Id: '1', Name: 'Acme Corp', Phone: '555-0101' },
        { Id: '2', Name: 'Salesforce Pro', Phone: '555-0202' },
        { Id: '3', Name: 'Tech Solutions', Phone: '555-0303' }
    ];
    @track isLoading = false;
    @track showEditModal = false;
    @track editObject = {};

    // Handles the search button click
    handleSearch() {
        this.isLoading = true;
        // Simulating a search delay
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }

    // Opens the edit modal and clones the selected record
    handleEdit(event) {
        const recordId = event.target.dataset.id;
        const selectedRecord = this.listAccount.find(item => item.Id === recordId);
        this.editObject = { ...selectedRecord };
        this.showEditModal = true;
    }

    // Closes the modal
    closeModals() {
        this.showEditModal = false;
    }

    // Updates the editObject as the user types in the modal
    handleInputChange(event) {
        const field = event.target.dataset.field;
        this.editObject[field] = event.target.value;
    }

    // Simulates saving the record
    handleSave() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
            this.showEditModal = false;
            console.log('Saved Record: ', JSON.stringify(this.editObject));
        }, 1000);
    }
}
