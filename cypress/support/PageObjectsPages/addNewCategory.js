
class AddNewCategory
{
    // Elements for AddNewCategory
    catalog="//p[normalize-space()='Catalog']"
    catgor="//p[normalize-space()='Categories']"
    addNew="//a[normalize-space()='Add new']"
    catName="//input[@id='Name']"
    patcat="//select[@id='ParentCategoryId']"

    
    /**
     * "Menu Calalog" click option
     */
    clickCatalog() {cy.xpath(this.catalog).click({force: true})}
        /**
         * "Bar Categories" click option
         */
        clickCategories() { cy.xpath(this.catgor).click({force: true})}
            /**
             * "Add New" click option
             */
            clickAddNew() {cy.xpath(this.addNew).click()}
                /**
                 * "Input Name" enter Name
                 */
                entName(NM) {cy.xpath(this.catName).type(NM)}
                    /**
                     * "Select Category" select option
                     */
                    selPaCategory() {cy.xpath(this.patcat).select('Computers').should('have.value','1')}



}


export default AddNewCategory