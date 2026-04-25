public class AccountCleanupBatch implements Database.Batchable<sObject> {
    
    // START: Collect Accounts older than 90 days
    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator(
            'SELECT Id, Name, Description FROM Account WHERE LastModifiedDate < LAST_90_DAYS'
        );
    }

    // EXECUTE: Update the description for this batch
    public void execute(Database.BatchableContext bc, List<Account> scope) {
        for (Account acc : scope) {
            acc.Description = 'System archived due to inactivity.';
        }
        update scope;
    }

    // FINISH: Log completion
    public void finish(Database.BatchableContext bc) {
        System.debug('Account Cleanup Batch Job Completed.');
    }
}
