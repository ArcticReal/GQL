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
import {PartyBenefitInputType} from '../../humanres/PartyBenefit/PartyBenefitInputType.js';
import {PartyBenefitResponseType} from '../../humanres/PartyBenefit/PartyBenefitResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyBenefit = {
  type: PartyBenefitResponseType,
  description: 'mutation for ofbiz createPartyBenefit method',
  args:{partyBenefitToBeAdded: {type: PartyBenefitInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/partyBenefits/add?`, args.partyBenefitToBeAdded, req);
  }
};
export {createPartyBenefit};


const updatePartyBenefit = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyBenefit method',
  args:{partyBenefitToBeUpdated: {type: PartyBenefitInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/partyBenefits/${args.nullVal}?`, args.partyBenefitToBeUpdated, req);
  }
};
export {updatePartyBenefit};


const deletePartyBenefitByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyBenefitByIdUpdated method',
  args:{partyBenefitId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/partyBenefits/${args.partyBenefitId}?`, null, req);
  }
};
export {deletePartyBenefitByIdUpdated};
