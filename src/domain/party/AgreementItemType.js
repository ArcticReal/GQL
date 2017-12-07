
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementFacilityApplType} from '../party/AgreementFacilityApplType.js';
import {AddendumType} from '../party/AddendumType.js';
import {AgreementType} from '../party/AgreementType.js';
import {SupplierProductType} from '../product/SupplierProductType.js';
import {AgreementTermType} from '../party/AgreementTermType.js';
import {AgreementEmploymentApplType} from '../party/AgreementEmploymentApplType.js';
import {AgreementItemTypeType} from '../party/AgreementItemTypeType.js';
import {AgreementItemAttributeType} from '../party/AgreementItemAttributeType.js';
import {AgreementGeographicalApplicType} from '../party/AgreementGeographicalApplicType.js';
import {AgreementProductApplType} from '../party/AgreementProductApplType.js';
import {AgreementPromoApplType} from '../party/AgreementPromoApplType.js';


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
    agreementTerm: {
      type: new GraphQLList(AgreementTermType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementTerms/find?agreementId=${agreementItem.agreementId}`)
    },
    supplierProduct: {
      type: new GraphQLList(SupplierProductType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`supplierProducts/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementFacilityAppl: {
      type: new GraphQLList(AgreementFacilityApplType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementFacilityAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    addendum: {
      type: new GraphQLList(AddendumType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`addendums/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementProductAppl: {
      type: new GraphQLList(AgreementProductApplType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementProductAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementItemAttribute: {
      type: new GraphQLList(AgreementItemAttributeType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementItemAttributes/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementPromoAppl: {
      type: new GraphQLList(AgreementPromoApplType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementPromoAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementEmploymentAppl: {
      type: new GraphQLList(AgreementEmploymentApplType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementEmploymentAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementGeographicalApplic: {
      type: new GraphQLList(AgreementGeographicalApplicType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`agreementGeographicalApplics/find?agreementId=${agreementItem.agreementId}`)
    }
  })
});

export {AgreementItemType};
    