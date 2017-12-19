
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

import {EmplPositionClassTypeType} from '../../humanres/EmplPositionClassType/EmplPositionClassTypeType.js';
import {EmplPositionTypeType} from '../../humanres/EmplPositionType/EmplPositionTypeType.js';


const EmplPositionTypeClassType = new GraphQLObjectType({
  name: 'EmplPositionTypeClassType',
  description: 'Type for EmplPositionTypeClass in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    standardHoursPerWeek: {type: GraphQLFloat},
    emplPositionType: {
      type: EmplPositionTypeType,
      args : {emplPositionTypeId: {type: GraphQLString}},
      resolve: (emplPositionTypeClass, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPosition/emplPositionTypes/find?emplPositionTypeId=${emplPositionTypeClass.emplPositionTypeId}`)
    },
    emplPositionClassType: {
      type: EmplPositionClassTypeType,
      args : {emplPositionClassTypeId: {type: GraphQLString}},
      resolve: (emplPositionTypeClass, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPosition/emplPositionClassTypes/find?emplPositionClassTypeId=${emplPositionTypeClass.emplPositionClassTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeClassType};
    