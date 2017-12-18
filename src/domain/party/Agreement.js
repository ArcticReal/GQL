
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

import {AgreementTypeType} from '../party/AgreementType.js';
import {AddendumType} from '../party/Addendum.js';
import {PartyRoleType} from '../party/PartyRole.js';
import {AgreementTermType} from '../party/AgreementTerm.js';
import {AgreementItemType} from '../party/AgreementItem.js';
import {AgreementWorkEffortApplicType} from '../party/AgreementWorkEffortApplic.js';
import {AgreementRoleType} from '../party/AgreementRole.js';
import {ProductType} from '../product/Product.js';
import {AgreementContentType} from '../party/AgreementContent.js';
import {AgreementAttributeType} from '../party/AgreementAttribute.js';
import {AgreementGeographicalApplicType} from '../party/AgreementGeographicalApplic.js';
import {AgreementPartyApplicType} from '../party/AgreementPartyApplic.js';


const AgreementType = new GraphQLObjectType({
  name: 'AgreementType',
  description: 'Type for Agreement in party',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyFrom: {
      type: PartyRoleType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${agreement.partyIdFrom}`)
    },
    textData: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${agreement.productId}`)
    },
    agreementDate: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementType: {
      type: AgreementTypeType,
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementTypes/find?agreementTypeId=${agreement.agreementTypeId}`)
    },
    description: {type: GraphQLString},
    partyTo: {
      type: PartyRoleType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${agreement.partyIdTo}`)
    },
    roleTypeIdFrom: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    agreementPartyApplics: {
      type: new GraphQLList(AgreementPartyApplicType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementPartyApplics/find?agreementId=${agreement.agreementId}`)
    },
    agreementRoles: {
      type: new GraphQLList(AgreementRoleType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementRoles/find?agreementId=${agreement.agreementId}`)
    },
    agreementAttributes: {
      type: new GraphQLList(AgreementAttributeType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementAttributes/find?agreementId=${agreement.agreementId}`)
    },
    agreementTerms: {
      type: new GraphQLList(AgreementTermType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementTerms/find?agreementId=${agreement.agreementId}`)
    },
    addendums: {
      type: new GraphQLList(AddendumType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/addendums/find?agreementId=${agreement.agreementId}`)
    },
    agreementItems: {
      type: new GraphQLList(AgreementItemType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementItems/find?agreementId=${agreement.agreementId}`)
    },
    agreementWorkEffortApplics: {
      type: new GraphQLList(AgreementWorkEffortApplicType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementWorkEffortApplics/find?agreementId=${agreement.agreementId}`)
    },
    agreementContents: {
      type: new GraphQLList(AgreementContentType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementContents/find?agreementId=${agreement.agreementId}`)
    },
    agreementGeographicalApplics: {
      type: new GraphQLList(AgreementGeographicalApplicType),
      args : {},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementGeographicalApplics/find?agreementId=${agreement.agreementId}`)
    }
  })
});

export {AgreementType};
    




const AgreementInputType = new GraphQLInputObjectType({
  name: 'AgreementInputType',
  description: 'input type for Agreement',

  fields: () => ({
    agreementDate: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    productId: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    textData: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {AgreementInputType};
    