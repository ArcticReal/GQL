
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

import {EmplPositionClassTypeType} from '../humanres/EmplPositionClassType.js';
import {EmplPositionTypeType} from '../humanres/EmplPositionType.js';


const EmplPositionTypeClassType = new GraphQLObjectType({
  name: 'EmplPositionTypeClassType',
  description: 'Type for EmplPositionTypeClass in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    standardHoursPerWeek: {type: GraphQLFloat},
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionTypeClass, args, {loaders}) => loaders.ofbiz.load(`emplPositionTypes/find?emplPositionTypeId=${emplPositionTypeClass.emplPositionTypeId}`)
    },
    emplPositionClassType: {
      type: EmplPositionClassTypeType,
      args : {emplPositionClassTypeId: {type: GraphQLString}},
      resolve: (emplPositionTypeClass, args, {loaders}) => loaders.ofbiz.load(`emplPositionClassTypes/find?emplPositionClassTypeId=${emplPositionTypeClass.emplPositionClassTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeClassType};
    




const EmplPositionTypeClassInputType = new GraphQLInputObjectType({
  name: 'EmplPositionTypeClassInputType',
  description: 'input type for EmplPositionTypeClass in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    standardHoursPerWeek: {type: GraphQLFloat},
    emplPositionTypeId: {type: GraphQLString},
    emplPositionClassTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeClassInputType};
    