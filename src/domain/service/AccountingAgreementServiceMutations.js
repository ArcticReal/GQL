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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const cancelAgreement = {
  type: ResopnseType,
  description: 'mutation for ofbiz cancelAgreement method',
  args:{agreementId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},textData: {type: GraphQLString},productId: {type: GraphQLString},agreementDate: {type: GraphQLString},agreementTypeId: {type: GraphQLString},description: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/cancelAgreement?agreementId=${args.agreementId}roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}textData=${args.textData}productId=${args.productId}agreementDate=${args.agreementDate}agreementTypeId=${args.agreementTypeId}description=${args.description}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}thruDate=${args.thruDate}`, null, req);
  }
};
export {cancelAgreement};


const copyAgreement = {
  type: ResopnseType,
  description: 'mutation for ofbiz copyAgreement method',
  args:{agreementId: {type: GraphQLString},copyAgreementParties: {type: GraphQLString},copyAgreementProducts: {type: GraphQLString},copyAgreementFacilities: {type: GraphQLString},copyAgreementTerms: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/copyAgreement?agreementId=${args.agreementId}copyAgreementParties=${args.copyAgreementParties}copyAgreementProducts=${args.copyAgreementProducts}copyAgreementFacilities=${args.copyAgreementFacilities}copyAgreementTerms=${args.copyAgreementTerms}`, null, req);
  }
};
export {copyAgreement};


const createAgreement = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreement method',
  args:{roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},textData: {type: GraphQLString},productId: {type: GraphQLString},agreementDate: {type: GraphQLString},agreementTypeId: {type: GraphQLString},description: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreement?roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}textData=${args.textData}productId=${args.productId}agreementDate=${args.agreementDate}agreementTypeId=${args.agreementTypeId}description=${args.description}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}thruDate=${args.thruDate}`, null, req);
  }
};
export {createAgreement};


const createAgreementContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementContent method',
  args:{agreementId: {type: GraphQLString},contentId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},agreementContentTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementContent?agreementId=${args.agreementId}contentId=${args.contentId}agreementItemSeqId=${args.agreementItemSeqId}agreementContentTypeId=${args.agreementContentTypeId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createAgreementContent};


const createAgreementFacilityAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementFacilityAppl method',
  args:{facilityId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementFacilityAppl?facilityId=${args.facilityId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}`, null, req);
  }
};
export {createAgreementFacilityAppl};


const createAgreementGeographicalApplic = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementGeographicalApplic method',
  args:{geoId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementGeographicalApplic?geoId=${args.geoId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}`, null, req);
  }
};
export {createAgreementGeographicalApplic};


const createAgreementItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementItem method',
  args:{agreementId: {type: GraphQLString},currencyUomId: {type: GraphQLString},agreementText: {type: GraphQLString},agreementImage: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},agreementItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementItem?agreementId=${args.agreementId}currencyUomId=${args.currencyUomId}agreementText=${args.agreementText}agreementImage=${args.agreementImage}agreementItemSeqId=${args.agreementItemSeqId}agreementItemTypeId=${args.agreementItemTypeId}`, null, req);
  }
};
export {createAgreementItem};


const createAgreementItemAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementItemAttribute method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementItemAttribute?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createAgreementItemAttribute};


const createAgreementPartyApplic = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementPartyApplic method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementPartyApplic?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}partyId=${args.partyId}`, null, req);
  }
};
export {createAgreementPartyApplic};


const createAgreementProductAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementProductAppl method',
  args:{productId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},price: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementProductAppl?productId=${args.productId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}price=${args.price}`, null, req);
  }
};
export {createAgreementProductAppl};


const createAgreementPromoAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementPromoAppl method',
  args:{fromDate: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},productPromoId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementPromoAppl?fromDate=${args.fromDate}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}productPromoId=${args.productPromoId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createAgreementPromoAppl};


const createAgreementRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementRole method',
  args:{roleTypeId: {type: GraphQLString},agreementId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementRole?roleTypeId=${args.roleTypeId}agreementId=${args.agreementId}partyId=${args.partyId}`, null, req);
  }
};
export {createAgreementRole};


const createAgreementTerm = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementTerm method',
  args:{textValue: {type: GraphQLString},termDays: {type: GraphQLInt},maxQuantity: {type: GraphQLFloat},termTypeId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},description: {type: GraphQLString},agreementTermId: {type: GraphQLString},termValue: {type: GraphQLFloat},invoiceItemTypeId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},minQuantity: {type: GraphQLFloat},agreementId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementTerm?textValue=${args.textValue}termDays=${args.termDays}maxQuantity=${args.maxQuantity}termTypeId=${args.termTypeId}agreementItemSeqId=${args.agreementItemSeqId}description=${args.description}agreementTermId=${args.agreementTermId}termValue=${args.termValue}invoiceItemTypeId=${args.invoiceItemTypeId}thruDate=${args.thruDate}fromDate=${args.fromDate}minQuantity=${args.minQuantity}agreementId=${args.agreementId}`, null, req);
  }
};
export {createAgreementTerm};


const createAgreementType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},agreementTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}agreementTypeId=${args.agreementTypeId}description=${args.description}`, null, req);
  }
};
export {createAgreementType};


const createAgreementTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementTypeAttr method',
  args:{agreementTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementTypeAttr?agreementTypeId=${args.agreementTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createAgreementTypeAttr};


const createAgreementWorkEffortApplic = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementWorkEffortApplic method',
  args:{workEffortId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/createAgreementWorkEffortApplic?workEffortId=${args.workEffortId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}`, null, req);
  }
};
export {createAgreementWorkEffortApplic};


const deleteAgreementItemAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementItemAttribute method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/deleteAgreementItemAttribute?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteAgreementItemAttribute};


const deleteAgreementRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementRole method',
  args:{roleTypeId: {type: GraphQLString},agreementId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/deleteAgreementRole?roleTypeId=${args.roleTypeId}agreementId=${args.agreementId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteAgreementRole};


const deleteAgreementTerm = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementTerm method',
  args:{agreementTermId: {type: GraphQLString},fromDate: {type: GraphQLString},textValue: {type: GraphQLString},minQuantity: {type: GraphQLFloat},termDays: {type: GraphQLInt},maxQuantity: {type: GraphQLFloat},agreementId: {type: GraphQLString},termTypeId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},description: {type: GraphQLString},termValue: {type: GraphQLFloat},invoiceItemTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/deleteAgreementTerm?agreementTermId=${args.agreementTermId}fromDate=${args.fromDate}textValue=${args.textValue}minQuantity=${args.minQuantity}termDays=${args.termDays}maxQuantity=${args.maxQuantity}agreementId=${args.agreementId}termTypeId=${args.termTypeId}agreementItemSeqId=${args.agreementItemSeqId}description=${args.description}termValue=${args.termValue}invoiceItemTypeId=${args.invoiceItemTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {deleteAgreementTerm};


const deleteAgreementWorkEffortApplic = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementWorkEffortApplic method',
  args:{workEffortId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/deleteAgreementWorkEffortApplic?workEffortId=${args.workEffortId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}`, null, req);
  }
};
export {deleteAgreementWorkEffortApplic};


const getCommissionForProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz getCommissionForProduct method',
  args:{amount: {type: GraphQLFloat},productId: {type: GraphQLString},invoiceItemTypeId: {type: GraphQLString},quantity: {type: GraphQLFloat},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/getCommissionForProduct?amount=${args.amount}productId=${args.productId}invoiceItemTypeId=${args.invoiceItemTypeId}quantity=${args.quantity}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}`, null, req);
  }
};
export {getCommissionForProduct};


const removeAgreementContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementContent method',
  args:{fromDate: {type: GraphQLString},agreementId: {type: GraphQLString},contentId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},agreementContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementContent?fromDate=${args.fromDate}agreementId=${args.agreementId}contentId=${args.contentId}agreementItemSeqId=${args.agreementItemSeqId}agreementContentTypeId=${args.agreementContentTypeId}`, null, req);
  }
};
export {removeAgreementContent};


const removeAgreementFacilityAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementFacilityAppl method',
  args:{facilityId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementFacilityAppl?facilityId=${args.facilityId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}`, null, req);
  }
};
export {removeAgreementFacilityAppl};


const removeAgreementGeographicalApplic = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementGeographicalApplic method',
  args:{geoId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementGeographicalApplic?geoId=${args.geoId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}`, null, req);
  }
};
export {removeAgreementGeographicalApplic};


const removeAgreementItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementItem method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},currencyUomId: {type: GraphQLString},agreementText: {type: GraphQLString},agreementImage: {type: GraphQLString},agreementItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementItem?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}currencyUomId=${args.currencyUomId}agreementText=${args.agreementText}agreementImage=${args.agreementImage}agreementItemTypeId=${args.agreementItemTypeId}`, null, req);
  }
};
export {removeAgreementItem};


const removeAgreementPartyApplic = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementPartyApplic method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementPartyApplic?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}partyId=${args.partyId}`, null, req);
  }
};
export {removeAgreementPartyApplic};


const removeAgreementProductAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementProductAppl method',
  args:{productId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},price: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementProductAppl?productId=${args.productId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}price=${args.price}`, null, req);
  }
};
export {removeAgreementProductAppl};


const removeAgreementPromoAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementPromoAppl method',
  args:{fromDate: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},productPromoId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementPromoAppl?fromDate=${args.fromDate}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}productPromoId=${args.productPromoId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {removeAgreementPromoAppl};


const removeAgreementType = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementType method',
  args:{agreementTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementType?agreementTypeId=${args.agreementTypeId}`, null, req);
  }
};
export {removeAgreementType};


const removeAgreementTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeAgreementTypeAttr method',
  args:{agreementTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/removeAgreementTypeAttr?agreementTypeId=${args.agreementTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {removeAgreementTypeAttr};


const updateAgreement = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreement method',
  args:{agreementId: {type: GraphQLString},roleTypeIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},partyIdFrom: {type: GraphQLString},textData: {type: GraphQLString},productId: {type: GraphQLString},agreementDate: {type: GraphQLString},agreementTypeId: {type: GraphQLString},description: {type: GraphQLString},partyIdTo: {type: GraphQLString},roleTypeIdFrom: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreement?agreementId=${args.agreementId}roleTypeIdTo=${args.roleTypeIdTo}fromDate=${args.fromDate}partyIdFrom=${args.partyIdFrom}textData=${args.textData}productId=${args.productId}agreementDate=${args.agreementDate}agreementTypeId=${args.agreementTypeId}description=${args.description}partyIdTo=${args.partyIdTo}roleTypeIdFrom=${args.roleTypeIdFrom}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateAgreement};


const updateAgreementContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementContent method',
  args:{fromDate: {type: GraphQLString},agreementId: {type: GraphQLString},contentId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},agreementContentTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementContent?fromDate=${args.fromDate}agreementId=${args.agreementId}contentId=${args.contentId}agreementItemSeqId=${args.agreementItemSeqId}agreementContentTypeId=${args.agreementContentTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateAgreementContent};


const updateAgreementFacilityAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementFacilityAppl method',
  args:{facilityId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementFacilityAppl?facilityId=${args.facilityId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}`, null, req);
  }
};
export {updateAgreementFacilityAppl};


const updateAgreementGeographicalApplic = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementGeographicalApplic method',
  args:{geoId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementGeographicalApplic?geoId=${args.geoId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}`, null, req);
  }
};
export {updateAgreementGeographicalApplic};


const updateAgreementItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementItem method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},currencyUomId: {type: GraphQLString},agreementText: {type: GraphQLString},agreementImage: {type: GraphQLString},agreementItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementItem?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}currencyUomId=${args.currencyUomId}agreementText=${args.agreementText}agreementImage=${args.agreementImage}agreementItemTypeId=${args.agreementItemTypeId}`, null, req);
  }
};
export {updateAgreementItem};


const updateAgreementItemAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementItemAttribute method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementItemAttribute?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateAgreementItemAttribute};


const updateAgreementPartyApplic = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementPartyApplic method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementPartyApplic?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}partyId=${args.partyId}`, null, req);
  }
};
export {updateAgreementPartyApplic};


const updateAgreementProductAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementProductAppl method',
  args:{productId: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},price: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementProductAppl?productId=${args.productId}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}price=${args.price}`, null, req);
  }
};
export {updateAgreementProductAppl};


const updateAgreementPromoAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementPromoAppl method',
  args:{fromDate: {type: GraphQLString},agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},productPromoId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementPromoAppl?fromDate=${args.fromDate}agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}productPromoId=${args.productPromoId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateAgreementPromoAppl};


const updateAgreementRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementRole method',
  args:{roleTypeId: {type: GraphQLString},agreementId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementRole?roleTypeId=${args.roleTypeId}agreementId=${args.agreementId}partyId=${args.partyId}`, null, req);
  }
};
export {updateAgreementRole};


const updateAgreementTerm = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementTerm method',
  args:{agreementTermId: {type: GraphQLString},fromDate: {type: GraphQLString},textValue: {type: GraphQLString},minQuantity: {type: GraphQLFloat},termDays: {type: GraphQLInt},maxQuantity: {type: GraphQLFloat},agreementId: {type: GraphQLString},termTypeId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},description: {type: GraphQLString},termValue: {type: GraphQLFloat},invoiceItemTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementTerm?agreementTermId=${args.agreementTermId}fromDate=${args.fromDate}textValue=${args.textValue}minQuantity=${args.minQuantity}termDays=${args.termDays}maxQuantity=${args.maxQuantity}agreementId=${args.agreementId}termTypeId=${args.termTypeId}agreementItemSeqId=${args.agreementItemSeqId}description=${args.description}termValue=${args.termValue}invoiceItemTypeId=${args.invoiceItemTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateAgreementTerm};


const updateAgreementType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementType method',
  args:{agreementTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementType?agreementTypeId=${args.agreementTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateAgreementType};


const updateAgreementTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementTypeAttr method',
  args:{agreementTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/updateAgreementTypeAttr?agreementTypeId=${args.agreementTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateAgreementTypeAttr};


const uploadAgreementContentFile = {
  type: ResopnseType,
  description: 'mutation for ofbiz uploadAgreementContentFile method',
  args:{agreementId: {type: GraphQLString},agreementItemSeqId: {type: GraphQLString},agreementContentTypeId: {type: GraphQLString},surveyId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},ownerContentId: {type: GraphQLString},mimeTypeId: {type: GraphQLString},rootDir: {type: GraphQLString},dataCategoryId: {type: GraphQLString},surveyResponseId: {type: GraphQLString},privilegeEnumId: {type: GraphQLString},contentAssocTypeId: {type: GraphQLString},dataResourceId: {type: GraphQLString},objectInfo: {type: GraphQLString},partyId: {type: GraphQLString},dataResourceTypeId: {type: GraphQLString},createdByUserLogin: {type: GraphQLString},dataResourceName: {type: GraphQLInt},targetOperationString: {type: GraphQLString},skipPermissionCheck: {type: GraphQLString},instanceOfContentId: {type: GraphQLString},contentPurposeString: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},statusId: {type: GraphQLString},displayFailCond: {type: GraphQLBoolean},contentIdFrom: {type: GraphQLString},_uploadedFile_fileName: {type: GraphQLString},childBranchCount: {type: GraphQLInt},contentIdTo: {type: GraphQLString},contentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},childLeafCount: {type: GraphQLInt},contentPurposeTypeId: {type: GraphQLString},dataSourceId: {type: GraphQLString},lastModifiedByUserLogin: {type: GraphQLString},_uploadedFile_contentType: {type: GraphQLString},relatedDetailId: {type: GraphQLString},isPublic: {type: GraphQLString},uploadedFile: {type: GraphQLString},roleTypeId: {type: GraphQLString},dataTemplateTypeId: {type: GraphQLString},lastModifiedDate: {type: GraphQLString},templateDataResourceId: {type: GraphQLString},mapKey: {type: GraphQLString},serviceName: {type: GraphQLString},characterSetId: {type: GraphQLString},customMethodId: {type: GraphQLString},contentName: {type: GraphQLInt},createdDate: {type: GraphQLString},localeString: {type: GraphQLString},decoratorContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAgreement/uploadAgreementContentFile?agreementId=${args.agreementId}agreementItemSeqId=${args.agreementItemSeqId}agreementContentTypeId=${args.agreementContentTypeId}surveyId=${args.surveyId}sequenceNum=${args.sequenceNum}ownerContentId=${args.ownerContentId}mimeTypeId=${args.mimeTypeId}rootDir=${args.rootDir}dataCategoryId=${args.dataCategoryId}surveyResponseId=${args.surveyResponseId}privilegeEnumId=${args.privilegeEnumId}contentAssocTypeId=${args.contentAssocTypeId}dataResourceId=${args.dataResourceId}objectInfo=${args.objectInfo}partyId=${args.partyId}dataResourceTypeId=${args.dataResourceTypeId}createdByUserLogin=${args.createdByUserLogin}dataResourceName=${args.dataResourceName}targetOperationString=${args.targetOperationString}skipPermissionCheck=${args.skipPermissionCheck}instanceOfContentId=${args.instanceOfContentId}contentPurposeString=${args.contentPurposeString}thruDate=${args.thruDate}fromDate=${args.fromDate}statusId=${args.statusId}displayFailCond=${args.displayFailCond}contentIdFrom=${args.contentIdFrom}_uploadedFile_fileName=${args._uploadedFile_fileName}childBranchCount=${args.childBranchCount}contentIdTo=${args.contentIdTo}contentTypeId=${args.contentTypeId}contentId=${args.contentId}description=${args.description}roleTypeList=${args.roleTypeList}childLeafCount=${args.childLeafCount}contentPurposeTypeId=${args.contentPurposeTypeId}dataSourceId=${args.dataSourceId}lastModifiedByUserLogin=${args.lastModifiedByUserLogin}_uploadedFile_contentType=${args._uploadedFile_contentType}relatedDetailId=${args.relatedDetailId}isPublic=${args.isPublic}uploadedFile=${args.uploadedFile}contentPurposeList=${args.contentPurposeList}roleTypeId=${args.roleTypeId}dataTemplateTypeId=${args.dataTemplateTypeId}targetOperationList=${args.targetOperationList}lastModifiedDate=${args.lastModifiedDate}templateDataResourceId=${args.templateDataResourceId}mapKey=${args.mapKey}serviceName=${args.serviceName}characterSetId=${args.characterSetId}customMethodId=${args.customMethodId}contentName=${args.contentName}createdDate=${args.createdDate}localeString=${args.localeString}decoratorContentId=${args.decoratorContentId}`, null, req);
  }
};
export {uploadAgreementContentFile};
