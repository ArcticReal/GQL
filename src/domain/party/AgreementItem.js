
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

import {AgreementFacilityApplType} from '../party/AgreementFacilityAppl.js';
import {AddendumType} from '../party/Addendum.js';
import {AgreementType} from '../party/Agreement.js';
import {SupplierProductType} from '../product/SupplierProduct.js';
import {AgreementTermType} from '../party/AgreementTerm.js';
import {AgreementEmploymentApplType} from '../party/AgreementEmploymentAppl.js';
import {AgreementItemTypeType} from '../party/AgreementItemType.js';
import {AgreementItemAttributeType} from '../party/AgreementItemAttribute.js';
import {AgreementGeographicalApplicType} from '../party/AgreementGeographicalApplic.js';
import {AgreementProductApplType} from '../party/AgreementProductAppl.js';
import {AgreementPromoApplType} from '../party/AgreementPromoAppl.js';


const AgreementItemType = new GraphQLObjectType({
  name: 'AgreementItemType',
  description: 'Type for AgreementItem in party',

  fields: () => ({
    currencyUomId: {type: GraphQLString},
    agreementText: {type: GraphQLString},
    agreementImage: {type: GraphQLString/*this was an Object TODO find a solution*/},
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbiz.load(`agreements/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    agreementItemType: {
      type: AgreementItemTypeType,
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbiz.load(`agreementItemTypes/find?agreementItemTypeId=${agreementItem.agreementItemTypeId}`)
    },
    agreementTerms: {
      type: new GraphQLList(AgreementTermType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementTerms/find?agreementId=${agreementItem.agreementId}`)
    },
    supplierProducts: {
      type: new GraphQLList(SupplierProductType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`supplierProducts/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementFacilityAppls: {
      type: new GraphQLList(AgreementFacilityApplType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementFacilityAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    addendums: {
      type: new GraphQLList(AddendumType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`addendums/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementProductAppls: {
      type: new GraphQLList(AgreementProductApplType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementProductAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementItemAttributes: {
      type: new GraphQLList(AgreementItemAttributeType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementItemAttributes/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementPromoAppls: {
      type: new GraphQLList(AgreementPromoApplType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementPromoAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementEmploymentAppls: {
      type: new GraphQLList(AgreementEmploymentApplType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementEmploymentAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementGeographicalApplics: {
      type: new GraphQLList(AgreementGeographicalApplicType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementGeographicalApplics/find?agreementId=${agreementItem.agreementId}`)
    }
  })
});

export {AgreementItemType};
    




const AgreementItemInputType = new GraphQLInputObjectType({
  name: 'AgreementItemInputType',
  description: 'input type for AgreementItem in party',

  fields: () => ({
    currencyUomId: {type: GraphQLString},
    agreementText: {type: GraphQLString},
    agreementImage: {type: GraphQLString/*this was an Object TODO find a solution*/},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    agreementItemTypeId: {type: GraphQLString}
  })
});

export {AgreementItemInputType};
    