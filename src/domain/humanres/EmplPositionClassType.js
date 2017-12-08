
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

import {EmplPositionTypeClassType} from '../humanres/EmplPositionTypeClass.js';


const EmplPositionClassTypeType = new GraphQLObjectType({
  name: 'EmplPositionClassTypeType',
  description: 'Type for EmplPositionClassType in humanres',

  fields: () => ({
    parentType: {
      type: EmplPositionClassTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (emplPositionClassType, args, {loaders}) => loaders.ofbiz.load(`emplPositionClassTypes/find?emplPositionClassTypeId=${emplPositionClassType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    emplPositionClassTypeId: {type: GraphQLString},
    emplPositionClassTypes: {
      type: new GraphQLList(EmplPositionClassTypeType),
      args : {emplPositionClassTypeId: {type: GraphQLString}},
      resolve: (emplPositionClassType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionClassTypes/find?emplPositionClassTypeId=${emplPositionClassType.emplPositionClassTypeId}`)
    },
    emplPositionTypeClasses: {
      type: new GraphQLList(EmplPositionTypeClassType),
      args : {emplPositionClassTypeId: {type: GraphQLString}},
      resolve: (emplPositionClassType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionTypeClasss/find?emplPositionClassTypeId=${emplPositionClassType.emplPositionClassTypeId}`)
    }
  })
});

export {EmplPositionClassTypeType};
    




const EmplPositionClassTypeInputType = new GraphQLInputObjectType({
  name: 'EmplPositionClassTypeInputType',
  description: 'input type for EmplPositionClassType in humanres',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    emplPositionClassTypeId: {type: GraphQLString}
  })
});

export {EmplPositionClassTypeInputType};
    