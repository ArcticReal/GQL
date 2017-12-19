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
import {BenefitTypeInputType} from '../../humanres/BenefitType/BenefitTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createBenefitType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBenefitType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/benefitTypes/add?`, null, req);
  }
};
export {createBenefitType};


const updateBenefitType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBenefitType method',
  args:{benefitTypeToBeUpdated: {type: BenefitTypeInputType},benefitTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/benefitTypes/${args.benefitTypeId}?`, args.benefitTypeToBeUpdated, req);
  }
};
export {updateBenefitType};


const deleteBenefitTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBenefitTypeByIdUpdated method',
  args:{benefitTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/benefitTypes/${args.benefitTypeId}?`, null, req);
  }
};
export {deleteBenefitTypeByIdUpdated};
