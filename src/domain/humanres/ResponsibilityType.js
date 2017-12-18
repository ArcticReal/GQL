
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
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbiz.load(`humanres/responsibilityTypes/find?responsibilityTypeId=${responsibilityType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    responsibilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    validResponsibilities: {
      type: new GraphQLList(ValidResponsibilityType),
      args : {},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`humanres/validResponsibilitys/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    },
    responsibilityTypes: {
      type: new GraphQLList(ResponsibilityTypeType),
      args : {},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`humanres/responsibilityTypes/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    },
    emplPositionResponsibilities: {
      type: new GraphQLList(EmplPositionResponsibilityType),
      args : {},
      resolve: (responsibilityType, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplPosition/emplPositionResponsibilitys/find?responsibilityTypeId=${responsibilityType.responsibilityTypeId}`)
    }
  })
});

export {ResponsibilityTypeType};
    




const ResponsibilityTypeInputType = new GraphQLInputObjectType({
  name: 'ResponsibilityTypeInputType',
  description: 'input type for ResponsibilityType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    responsibilityTypeId: {type: GraphQLString}
  })
});

export {ResponsibilityTypeInputType};
    