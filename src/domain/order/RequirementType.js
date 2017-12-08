
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

import {RequirementType} from '../order/Requirement.js';
import {RequirementTypeAttrType} from '../order/RequirementTypeAttr.js';


const RequirementTypeType = new GraphQLObjectType({
  name: 'RequirementTypeType',
  description: 'Type for RequirementType in order',

  fields: () => ({
    requirementTypeId: {type: GraphQLString},
    parentType: {
      type: RequirementTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbiz.load(`requirementTypes/find?requirementTypeId=${requirementType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    requirements: {
      type: new GraphQLList(RequirementType),
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`requirements/find?requirementTypeId=${requirementType.requirementTypeId}`)
    },
    requirementTypes: {
      type: new GraphQLList(RequirementTypeType),
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`requirementTypes/find?requirementTypeId=${requirementType.requirementTypeId}`)
    },
    requirementTypeAttrs: {
      type: new GraphQLList(RequirementTypeAttrType),
      args : {requirementTypeId: {type: GraphQLString}},
      resolve: (requirementType, args, {loaders}) => loaders.ofbizArray.load(`requirementTypeAttrs/find?requirementTypeId=${requirementType.requirementTypeId}`)
    }
  })
});

export {RequirementTypeType};
    




const RequirementTypeInputType = new GraphQLInputObjectType({
  name: 'RequirementTypeInputType',
  description: 'input type for RequirementType in order',

  fields: () => ({
    requirementTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {RequirementTypeInputType};
    