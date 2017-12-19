import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {KeyValueType} from '../../framework/helpTypes.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const calcTax = {
  type: GraphQLString,
  description: 'mutation for ofbiz calcTax method',
  args:{orderPromotionsAmount: {type: GraphQLFloat},facilityId: {type: GraphQLString},orderShippingAmount: {type: GraphQLFloat},billToPartyId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},productStoreId: {type: GraphQLString},payToPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/calcTax?itemPriceList=${args.itemPriceList}itemAmountList=${args.itemAmountList}itemProductList=${args.itemProductList}orderPromotionsAmount=${args.orderPromotionsAmount}facilityId=${args.facilityId}orderShippingAmount=${args.orderShippingAmount}billToPartyId=${args.billToPartyId}shippingAddress=${args.shippingAddress}productStoreId=${args.productStoreId}itemQuantityList=${args.itemQuantityList}payToPartyId=${args.payToPartyId}itemShippingList=${args.itemShippingList}`, null, req);
  }
};
export {calcTax};


const calcTaxForDisplay = {
  type: GraphQLString,
  description: 'mutation for ofbiz calcTaxForDisplay method',
  args:{productId: {type: GraphQLString},productStoreId: {type: GraphQLString},basePrice: {type: GraphQLFloat},quantity: {type: GraphQLFloat},shippingPrice: {type: GraphQLFloat},billToPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/calcTaxForDisplay?productId=${args.productId}productStoreId=${args.productStoreId}basePrice=${args.basePrice}quantity=${args.quantity}shippingPrice=${args.shippingPrice}billToPartyId=${args.billToPartyId}`, null, req);
  }
};
export {calcTaxForDisplay};


const calcTaxInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz calcTaxInterface method',
  args:{orderPromotionsAmount: {type: GraphQLFloat},facilityId: {type: GraphQLString},orderShippingAmount: {type: GraphQLFloat},billToPartyId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},productStoreId: {type: GraphQLString},payToPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/calcTaxInterface?itemPriceList=${args.itemPriceList}itemAmountList=${args.itemAmountList}itemProductList=${args.itemProductList}orderPromotionsAmount=${args.orderPromotionsAmount}facilityId=${args.facilityId}orderShippingAmount=${args.orderShippingAmount}billToPartyId=${args.billToPartyId}shippingAddress=${args.shippingAddress}productStoreId=${args.productStoreId}itemQuantityList=${args.itemQuantityList}payToPartyId=${args.payToPartyId}itemShippingList=${args.itemShippingList}`, null, req);
  }
};
export {calcTaxInterface};


const calcTaxTotalForDisplayInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz calcTaxTotalForDisplayInterface method',
  args:{productId: {type: GraphQLString},productStoreId: {type: GraphQLString},basePrice: {type: GraphQLFloat},quantity: {type: GraphQLFloat},shippingPrice: {type: GraphQLFloat},billToPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/calcTaxTotalForDisplayInterface?productId=${args.productId}productStoreId=${args.productStoreId}basePrice=${args.basePrice}quantity=${args.quantity}shippingPrice=${args.shippingPrice}billToPartyId=${args.billToPartyId}`, null, req);
  }
};
export {calcTaxTotalForDisplayInterface};


const createCustomerTaxAuthInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustomerTaxAuthInfo method',
  args:{taxAuthPartyGeoIds: {type: GraphQLString},partyId: {type: GraphQLString},partyTaxId: {type: GraphQLString},fromDate: {type: GraphQLString},isNexus: {type: GraphQLString},isExempt: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createCustomerTaxAuthInfo?taxAuthPartyGeoIds=${args.taxAuthPartyGeoIds}partyId=${args.partyId}partyTaxId=${args.partyTaxId}fromDate=${args.fromDate}isNexus=${args.isNexus}isExempt=${args.isExempt}thruDate=${args.thruDate}`, null, req);
  }
};
export {createCustomerTaxAuthInfo};


const createPartyTaxAuthInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyTaxAuthInfo method',
  args:{taxAuthPartyId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},partyId: {type: GraphQLString},fromDate: {type: GraphQLString},partyTaxId: {type: GraphQLString},isNexus: {type: GraphQLString},isExempt: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createPartyTaxAuthInfo?taxAuthPartyId=${args.taxAuthPartyId}taxAuthGeoId=${args.taxAuthGeoId}partyId=${args.partyId}fromDate=${args.fromDate}partyTaxId=${args.partyTaxId}isNexus=${args.isNexus}isExempt=${args.isExempt}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyTaxAuthInfo};


const createTaxAuthority = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthority method',
  args:{taxAuthPartyId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},requireTaxIdForExemption: {type: GraphQLString},includeTaxInPrice: {type: GraphQLString},taxIdFormatPattern: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createTaxAuthority?taxAuthPartyId=${args.taxAuthPartyId}taxAuthGeoId=${args.taxAuthGeoId}requireTaxIdForExemption=${args.requireTaxIdForExemption}includeTaxInPrice=${args.includeTaxInPrice}taxIdFormatPattern=${args.taxIdFormatPattern}`, null, req);
  }
};
export {createTaxAuthority};


const createTaxAuthorityAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityAssoc method',
  args:{taxAuthPartyId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},toTaxAuthPartyId: {type: GraphQLString},toTaxAuthGeoId: {type: GraphQLString},fromDate: {type: GraphQLString},taxAuthorityAssocTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createTaxAuthorityAssoc?taxAuthPartyId=${args.taxAuthPartyId}taxAuthGeoId=${args.taxAuthGeoId}toTaxAuthPartyId=${args.toTaxAuthPartyId}toTaxAuthGeoId=${args.toTaxAuthGeoId}fromDate=${args.fromDate}taxAuthorityAssocTypeId=${args.taxAuthorityAssocTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createTaxAuthorityAssoc};


const createTaxAuthorityAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityAssocType method',
  args:{taxAuthorityAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createTaxAuthorityAssocType?taxAuthorityAssocTypeId=${args.taxAuthorityAssocTypeId}description=${args.description}`, null, req);
  }
};
export {createTaxAuthorityAssocType};


const createTaxAuthorityCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityCategory method',
  args:{taxAuthPartyId: {type: GraphQLString},productCategoryId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createTaxAuthorityCategory?taxAuthPartyId=${args.taxAuthPartyId}productCategoryId=${args.productCategoryId}taxAuthGeoId=${args.taxAuthGeoId}`, null, req);
  }
};
export {createTaxAuthorityCategory};


const createTaxAuthorityGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityGlAccount method',
  args:{taxAuthPartyId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},glAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createTaxAuthorityGlAccount?taxAuthPartyId=${args.taxAuthPartyId}taxAuthGeoId=${args.taxAuthGeoId}organizationPartyId=${args.organizationPartyId}glAccountId=${args.glAccountId}`, null, req);
  }
};
export {createTaxAuthorityGlAccount};


const createTaxAuthorityRateProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityRateProduct method',
  args:{taxShipping: {type: GraphQLString},taxPercentage: {type: GraphQLFloat},description: {type: GraphQLString},titleTransferEnumId: {type: GraphQLString},taxPromotions: {type: GraphQLString},thruDate: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},minItemPrice: {type: GraphQLFloat},minPurchase: {type: GraphQLFloat},taxAuthorityRateTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createTaxAuthorityRateProduct?taxShipping=${args.taxShipping}taxPercentage=${args.taxPercentage}description=${args.description}titleTransferEnumId=${args.titleTransferEnumId}taxPromotions=${args.taxPromotions}thruDate=${args.thruDate}taxAuthPartyId=${args.taxAuthPartyId}fromDate=${args.fromDate}productCategoryId=${args.productCategoryId}taxAuthGeoId=${args.taxAuthGeoId}minItemPrice=${args.minItemPrice}minPurchase=${args.minPurchase}taxAuthorityRateTypeId=${args.taxAuthorityRateTypeId}productStoreId=${args.productStoreId}`, null, req);
  }
};
export {createTaxAuthorityRateProduct};


const createTaxAuthorityRateType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityRateType method',
  args:{description: {type: GraphQLString},taxAuthorityRateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/createTaxAuthorityRateType?description=${args.description}taxAuthorityRateTypeId=${args.taxAuthorityRateTypeId}`, null, req);
  }
};
export {createTaxAuthorityRateType};


const deletePartyTaxAuthInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyTaxAuthInfo method',
  args:{taxAuthPartyId: {type: GraphQLString},fromDate: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/deletePartyTaxAuthInfo?taxAuthPartyId=${args.taxAuthPartyId}fromDate=${args.fromDate}taxAuthGeoId=${args.taxAuthGeoId}partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyTaxAuthInfo};


const deleteTaxAuthority = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthority method',
  args:{taxAuthPartyId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/deleteTaxAuthority?taxAuthPartyId=${args.taxAuthPartyId}taxAuthGeoId=${args.taxAuthGeoId}`, null, req);
  }
};
export {deleteTaxAuthority};


const deleteTaxAuthorityAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityAssoc method',
  args:{taxAuthPartyId: {type: GraphQLString},fromDate: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},toTaxAuthPartyId: {type: GraphQLString},toTaxAuthGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/deleteTaxAuthorityAssoc?taxAuthPartyId=${args.taxAuthPartyId}fromDate=${args.fromDate}taxAuthGeoId=${args.taxAuthGeoId}toTaxAuthPartyId=${args.toTaxAuthPartyId}toTaxAuthGeoId=${args.toTaxAuthGeoId}`, null, req);
  }
};
export {deleteTaxAuthorityAssoc};


const deleteTaxAuthorityAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityAssocType method',
  args:{taxAuthorityAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/deleteTaxAuthorityAssocType?taxAuthorityAssocTypeId=${args.taxAuthorityAssocTypeId}`, null, req);
  }
};
export {deleteTaxAuthorityAssocType};


const deleteTaxAuthorityCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityCategory method',
  args:{taxAuthPartyId: {type: GraphQLString},productCategoryId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/deleteTaxAuthorityCategory?taxAuthPartyId=${args.taxAuthPartyId}productCategoryId=${args.productCategoryId}taxAuthGeoId=${args.taxAuthGeoId}`, null, req);
  }
};
export {deleteTaxAuthorityCategory};


const deleteTaxAuthorityGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityGlAccount method',
  args:{taxAuthPartyId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/deleteTaxAuthorityGlAccount?taxAuthPartyId=${args.taxAuthPartyId}taxAuthGeoId=${args.taxAuthGeoId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {deleteTaxAuthorityGlAccount};


const deleteTaxAuthorityRateProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityRateProduct method',
  args:{taxAuthorityRateSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/deleteTaxAuthorityRateProduct?taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}`, null, req);
  }
};
export {deleteTaxAuthorityRateProduct};


const deleteTaxAuthorityRateType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityRateType method',
  args:{taxAuthorityRateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/deleteTaxAuthorityRateType?taxAuthorityRateTypeId=${args.taxAuthorityRateTypeId}`, null, req);
  }
};
export {deleteTaxAuthorityRateType};


const flatZipSalesTaxCalc = {
  type: GraphQLString,
  description: 'mutation for ofbiz flatZipSalesTaxCalc method',
  args:{orderPromotionsAmount: {type: GraphQLFloat},facilityId: {type: GraphQLString},orderShippingAmount: {type: GraphQLFloat},billToPartyId: {type: GraphQLString},shippingAddress: {type: new GraphQLList(KeyValueType)},productStoreId: {type: GraphQLString},payToPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/flatZipSalesTaxCalc?itemPriceList=${args.itemPriceList}itemAmountList=${args.itemAmountList}itemProductList=${args.itemProductList}orderPromotionsAmount=${args.orderPromotionsAmount}facilityId=${args.facilityId}orderShippingAmount=${args.orderShippingAmount}billToPartyId=${args.billToPartyId}shippingAddress=${args.shippingAddress}productStoreId=${args.productStoreId}itemQuantityList=${args.itemQuantityList}payToPartyId=${args.payToPartyId}itemShippingList=${args.itemShippingList}`, null, req);
  }
};
export {flatZipSalesTaxCalc};


const importZipSalesTaxData = {
  type: GraphQLString,
  description: 'mutation for ofbiz importZipSalesTaxData method',
  args:{ruleFileLocation: {type: GraphQLString},taxFileLocation: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/importZipSalesTaxData?ruleFileLocation=${args.ruleFileLocation}taxFileLocation=${args.taxFileLocation}`, null, req);
  }
};
export {importZipSalesTaxData};


const updatePartyTaxAuthInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyTaxAuthInfo method',
  args:{taxAuthPartyId: {type: GraphQLString},fromDate: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},partyId: {type: GraphQLString},partyTaxId: {type: GraphQLString},isNexus: {type: GraphQLString},isExempt: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/updatePartyTaxAuthInfo?taxAuthPartyId=${args.taxAuthPartyId}fromDate=${args.fromDate}taxAuthGeoId=${args.taxAuthGeoId}partyId=${args.partyId}partyTaxId=${args.partyTaxId}isNexus=${args.isNexus}isExempt=${args.isExempt}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyTaxAuthInfo};


const updateTaxAuthority = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthority method',
  args:{taxAuthPartyId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},requireTaxIdForExemption: {type: GraphQLString},includeTaxInPrice: {type: GraphQLString},taxIdFormatPattern: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/updateTaxAuthority?taxAuthPartyId=${args.taxAuthPartyId}taxAuthGeoId=${args.taxAuthGeoId}requireTaxIdForExemption=${args.requireTaxIdForExemption}includeTaxInPrice=${args.includeTaxInPrice}taxIdFormatPattern=${args.taxIdFormatPattern}`, null, req);
  }
};
export {updateTaxAuthority};


const updateTaxAuthorityAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityAssoc method',
  args:{taxAuthPartyId: {type: GraphQLString},fromDate: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},toTaxAuthPartyId: {type: GraphQLString},toTaxAuthGeoId: {type: GraphQLString},taxAuthorityAssocTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/updateTaxAuthorityAssoc?taxAuthPartyId=${args.taxAuthPartyId}fromDate=${args.fromDate}taxAuthGeoId=${args.taxAuthGeoId}toTaxAuthPartyId=${args.toTaxAuthPartyId}toTaxAuthGeoId=${args.toTaxAuthGeoId}taxAuthorityAssocTypeId=${args.taxAuthorityAssocTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateTaxAuthorityAssoc};


const updateTaxAuthorityAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityAssocType method',
  args:{taxAuthorityAssocTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/updateTaxAuthorityAssocType?taxAuthorityAssocTypeId=${args.taxAuthorityAssocTypeId}description=${args.description}`, null, req);
  }
};
export {updateTaxAuthorityAssocType};


const updateTaxAuthorityCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityCategory method',
  args:{taxAuthPartyId: {type: GraphQLString},productCategoryId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/updateTaxAuthorityCategory?taxAuthPartyId=${args.taxAuthPartyId}productCategoryId=${args.productCategoryId}taxAuthGeoId=${args.taxAuthGeoId}`, null, req);
  }
};
export {updateTaxAuthorityCategory};


const updateTaxAuthorityGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityGlAccount method',
  args:{taxAuthPartyId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},glAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/updateTaxAuthorityGlAccount?taxAuthPartyId=${args.taxAuthPartyId}taxAuthGeoId=${args.taxAuthGeoId}organizationPartyId=${args.organizationPartyId}glAccountId=${args.glAccountId}`, null, req);
  }
};
export {updateTaxAuthorityGlAccount};


const updateTaxAuthorityRateProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityRateProduct method',
  args:{taxAuthorityRateSeqId: {type: GraphQLString},taxShipping: {type: GraphQLString},taxPercentage: {type: GraphQLFloat},description: {type: GraphQLString},titleTransferEnumId: {type: GraphQLString},taxPromotions: {type: GraphQLString},thruDate: {type: GraphQLString},taxAuthPartyId: {type: GraphQLString},fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},taxAuthGeoId: {type: GraphQLString},minItemPrice: {type: GraphQLFloat},minPurchase: {type: GraphQLFloat},taxAuthorityRateTypeId: {type: GraphQLString},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/updateTaxAuthorityRateProduct?taxAuthorityRateSeqId=${args.taxAuthorityRateSeqId}taxShipping=${args.taxShipping}taxPercentage=${args.taxPercentage}description=${args.description}titleTransferEnumId=${args.titleTransferEnumId}taxPromotions=${args.taxPromotions}thruDate=${args.thruDate}taxAuthPartyId=${args.taxAuthPartyId}fromDate=${args.fromDate}productCategoryId=${args.productCategoryId}taxAuthGeoId=${args.taxAuthGeoId}minItemPrice=${args.minItemPrice}minPurchase=${args.minPurchase}taxAuthorityRateTypeId=${args.taxAuthorityRateTypeId}productStoreId=${args.productStoreId}`, null, req);
  }
};
export {updateTaxAuthorityRateProduct};


const updateTaxAuthorityRateType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityRateType method',
  args:{taxAuthorityRateTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingTax/updateTaxAuthorityRateType?taxAuthorityRateTypeId=${args.taxAuthorityRateTypeId}description=${args.description}`, null, req);
  }
};
export {updateTaxAuthorityRateType};
