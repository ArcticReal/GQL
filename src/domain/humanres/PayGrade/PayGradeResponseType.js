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

const PayGradeResponseType = new GraphQLObjectType({
  name: 'PayGradeResponseType',
  description: 'response type for PayGrade',

  fields: () => ({
    comments: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    payGradeName: {type: GraphQLString}
  })
});

export {PayGradeResponseType};
    