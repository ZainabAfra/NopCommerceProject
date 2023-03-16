
class AddNewManufacture
{
    catalog="//p[normalize-space()='Catalog']"
    manufacturers="//p[normalize-space()='Manufacturers']"
    addNew="//a[normalize-space()='Add new']"



    clickCatalog()
    {
        cy.xpath(this.catalog).click({force: true})
    }

    clickManufact()
    {
        cy.xpath(this.manufacturers).click({force: true})
    }

    clickAddNew()
    {
        cy.xpath(this.addNew).click()
    }
}

export default AddNewManufacture