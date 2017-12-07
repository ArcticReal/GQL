
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RequirementType} from '../order/RequirementType.js';


const RequirementAttributeType = new GraphQLObjectType({
  name: 'RequirementAttributeType',
  description: 'Type for RequirementAttribute in order',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirementAttribute, args, {loaders}) => loaders.ofbiz.load(`requirements/find?requirementId=${requirementAttribute.requirementId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {RequirementAttributeType};
    