
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {MrpEventType} from '../manufacturing/MrpEventType.js';


const MrpEventTypeType = new GraphQLObjectType({
  name: 'MrpEventTypeType',
  description: 'Type for MrpEventType in manufacturing',

  fields: () => ({
    mrpEventTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    mrpEvent: {
      type: new GraphQLList(MrpEventType),
      args : {mrpEventTypeId: {type: GraphQLString}},
      resolve: (mrpEventType, args, {loaders}) => loaders.ofbizArray.load(`mrpEvents/find?mrpEventTypeId=${mrpEventType.mrpEventTypeId}`)
    }
  })
});

export {MrpEventTypeType};
    