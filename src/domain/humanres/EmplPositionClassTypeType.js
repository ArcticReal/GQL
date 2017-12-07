
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {EmplPositionTypeClassType} from '../humanres/EmplPositionTypeClassType.js';


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
    emplPositionClassType: {
      type: new GraphQLList(EmplPositionClassTypeType),
      args : {emplPositionClassTypeId: {type: GraphQLString}},
      resolve: (emplPositionClassType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionClassTypes/find?emplPositionClassTypeId=${emplPositionClassType.emplPositionClassTypeId}`)
    },
    emplPositionTypeClass: {
      type: new GraphQLList(EmplPositionTypeClassType),
      args : {emplPositionClassTypeId: {type: GraphQLString}},
      resolve: (emplPositionClassType, args, {loaders}) => loaders.ofbizArray.load(`emplPositionTypeClasss/find?emplPositionClassTypeId=${emplPositionClassType.emplPositionClassTypeId}`)
    }
  })
});

export {EmplPositionClassTypeType};
    