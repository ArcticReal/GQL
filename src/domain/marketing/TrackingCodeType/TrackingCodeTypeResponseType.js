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

const TrackingCodeTypeResponseType = new GraphQLObjectType({
  name: 'TrackingCodeTypeResponseType',
  description: 'response type for TrackingCodeType',

  fields: () => ({
    description: {type: GraphQLString},
    trackingCodeTypeId: {type: GraphQLString}
  })
});

export {TrackingCodeTypeResponseType};
    