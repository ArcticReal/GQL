
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementTypeType} from '../party/AgreementTypeType.js';
import {AddendumType} from '../party/AddendumType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';
import {AgreementTermType} from '../party/AgreementTermType.js';
import {AgreementItemType} from '../party/AgreementItemType.js';
import {AgreementWorkEffortApplicType} from '../party/AgreementWorkEffortApplicType.js';
import {AgreementRoleType} from '../party/AgreementRoleType.js';
import {ProductType} from '../product/ProductType.js';
import {AgreementContentType} from '../party/AgreementContentType.js';
import {AgreementAttributeType} from '../party/AgreementAttributeType.js';
import {AgreementGeographicalApplicType} from '../party/AgreementGeographicalApplicType.js';
import {AgreementPartyApplicType} from '../party/AgreementPartyApplicType.js';


const AgreementType = new GraphQLObjectType({
  name: 'AgreementType',
  description: 'Type for Agreement in party',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyFrom: {
      type: PartyRoleType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${agreement.partyIdFrom}`)
    },
    textData: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${agreement.productId}`)
    },
    agreementDate: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementType: {
      type: AgreementTypeType,
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbiz.load(`agreementTypes/find?agreementTypeId=${agreement.agreementTypeId}`)
    },
    description: {type: GraphQLString},
    partyTo: {
      type: PartyRoleType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${agreement.partyIdTo}`)
    },
    roleTypeIdFrom: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    agreementPartyApplic: {
      type: new GraphQLList(AgreementPartyApplicType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`agreementPartyApplics/find?agreementId=${agreement.agreementId}`)
    },
    agreementRole: {
      type: new GraphQLList(AgreementRoleType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`agreementRoles/find?agreementId=${agreement.agreementId}`)
    },
    agreementAttribute: {
      type: new GraphQLList(AgreementAttributeType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`agreementAttributes/find?agreementId=${agreement.agreementId}`)
    },
    agreementTerm: {
      type: new GraphQLList(AgreementTermType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`agreementTerms/find?agreementId=${agreement.agreementId}`)
    },
    addendum: {
      type: new GraphQLList(AddendumType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`addendums/find?agreementId=${agreement.agreementId}`)
    },
    agreementItem: {
      type: new GraphQLList(AgreementItemType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`agreementItems/find?agreementId=${agreement.agreementId}`)
    },
    agreementWorkEffortApplic: {
      type: new GraphQLList(AgreementWorkEffortApplicType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`agreementWorkEffortApplics/find?agreementId=${agreement.agreementId}`)
    },
    agreementContent: {
      type: new GraphQLList(AgreementContentType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`agreementContents/find?agreementId=${agreement.agreementId}`)
    },
    agreementGeographicalApplic: {
      type: new GraphQLList(AgreementGeographicalApplicType),
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreement, args, {loaders}) => loaders.ofbizArray.load(`agreementGeographicalApplics/find?agreementId=${agreement.agreementId}`)
    }
  })
});

export {AgreementType};
    