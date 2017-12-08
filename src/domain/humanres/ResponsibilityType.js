
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

import {ValidResponsibilityType} from '../humanres/ValidResponsibility.js';
import {EmplPositionResponsibilityType} from '../humanres/EmplPositionResponsibility.js';


const ResponsibilityTypeType = new GraphQLObjectType({
  name: 'ResponsibilityTypeType',
  description: 'Type for ResponsibilityType in humanres',

  fields: () => ({
    parentType: {
      type: ResponsibilityTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbiz.load(`responsibilityTypes/find?responsibilityTypeId=${responsibilityType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    responsibilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    validResponsibilities: {
      type: new GraphQLList(ValidResponsibilityType),
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`validResponsibilitys/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    },
    responsibilityTypes: {
      type: new GraphQLList(ResponsibilityTypeType),
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`responsibilityTypes/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    },
    emplPositionResponsibilities: {
      type: new GraphQLList(EmplPositionResponsibilityType),
      args : {responsibilityTypeId: {type: GraphQLString}},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionResponsibilitys/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    }
  })
});

export {ResponsibilityTypeType};
    




const ResponsibilityTypeInputType = new GraphQLInputObjectType({
  name: 'ResponsibilityTypeInputType',
  description: 'input type for ResponsibilityType in humanres',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    responsibilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ResponsibilityTypeInputType};
    