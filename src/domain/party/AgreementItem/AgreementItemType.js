
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

import {AgreementFacilityApplType} from '../../party/AgreementFacilityAppl/AgreementFacilityApplType.js';
import {AddendumType} from '../../party/Addendum/AddendumType.js';
import {AgreementType} from '../../party/Agreement/AgreementType.js';
import {SupplierProductType} from '../../product/SupplierProduct/SupplierProductType.js';
import {AgreementTermType} from '../../party/AgreementTerm/AgreementTermType.js';
import {AgreementEmploymentApplType} from '../../party/AgreementEmploymentAppl/AgreementEmploymentApplType.js';
import {AgreementItemTypeType} from '../../party/AgreementItemType/AgreementItemTypeType.js';
import {AgreementItemAttributeType} from '../../party/AgreementItemAttribute/AgreementItemAttributeType.js';
import {AgreementGeographicalApplicType} from '../../party/AgreementGeographicalApplic/AgreementGeographicalApplicType.js';
import {AgreementProductApplType} from '../../party/AgreementProductAppl/AgreementProductApplType.js';
import {AgreementPromoApplType} from '../../party/AgreementPromoAppl/AgreementPromoApplType.js';


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
      resolve: (agreementItem, args, {loaders}) => loaders.ofbiz.load(`party/agreements/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    agreementItemType: {
      type: AgreementItemTypeType,
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItemTypes/find?agreementItemTypeId=${agreementItem.agreementItemTypeId}`)
    },
    agreementTerms: {
      type: new GraphQLList(AgreementTermType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementTerms/find?agreementId=${agreementItem.agreementId}`)
    },
    supplierProducts: {
      type: new GraphQLList(SupplierProductType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`product/product/supplierProducts/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementFacilityAppls: {
      type: new GraphQLList(AgreementFacilityApplType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementFacilityAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    addendums: {
      type: new GraphQLList(AddendumType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`party/addendums/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementProductAppls: {
      type: new GraphQLList(AgreementProductApplType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementProductAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementItemAttributes: {
      type: new GraphQLList(AgreementItemAttributeType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementItemAttributes/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementPromoAppls: {
      type: new GraphQLList(AgreementPromoApplType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementPromoAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementEmploymentAppls: {
      type: new GraphQLList(AgreementEmploymentApplType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementEmploymentAppls/find?agreementId=${agreementItem.agreementId}`)
    },
    agreementGeographicalApplics: {
      type: new GraphQLList(AgreementGeographicalApplicType),
      args : {},
      resolve: (agreementItem, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementGeographicalApplics/find?agreementId=${agreementItem.agreementId}`)
    }
  })
});

export {AgreementItemType};
    