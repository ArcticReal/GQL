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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyBenefit = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyBenefit method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/partyBenefits/add?`, null, req);
  }
};
export {createPartyBenefit};


const updatePartyBenefit = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyBenefit method',
  args:{partyBenefitToBeUpdated: {type: PartyBenefitInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/partyBenefits/${args.nullVal}?`, args.partyBenefitToBeUpdated, req);
  }
};
export {updatePartyBenefit};


const deletePartyBenefitByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyBenefitByIdUpdated method',
  args:{partyBenefitId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/partyBenefits/${args.partyBenefitId}?`, null, req);
  }
};
export {deletePartyBenefitByIdUpdated};
